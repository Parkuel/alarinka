const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});
const cors = require("cors");

const userRoutes = require("./routers/userRoutes");
const imageRoutes = require("./routers/imageRoutes");
const placeRoutes = require("./routers/placeRoutes");
const bookingRoutes = require("./routers/bookingRoutes");
const placeSocket = require("./controllers/place/placeSocket");
const bookingSocket = require("./controllers/booking/bookingSocket");
const globalErrorHandler = require("./controllers/globalErrorHandler");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.set("trust proxy", true);
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

app.use("/user", userRoutes);
app.use("/images", imageRoutes);
app.use("/place", placeRoutes);
app.use("/booking", bookingRoutes);

app.all("*", (req, res, next) => {
  const errMessage = `Can't find ${req.originalUrl} on this server`;
  res.status(404).json({
    status: "failed",
    message: errMessage,
  });
});

app.use(globalErrorHandler);

io.on("connection", (socket) => {
  socket.on(
    "create place",
    async (queryObj) => await placeSocket.createPlace(socket, queryObj)
  );
  socket.on(
    "delete place",
    async (queryObj) => await placeSocket.deletePlace(socket, queryObj)
  );
  socket.on(
    "create booking",
    async (queryObj) => await bookingSocket.createBooking(socket, queryObj)
  );
  socket.on(
    "update status",
    async (queryObj) => await bookingSocket.updateStatus(socket, queryObj)
  );
  socket.on("activate bookings notification", (userId) => {
    const MAX_ROOM_SIZE = 1;
    const roomSize = io.sockets.adapter.rooms[userId]?.length || 0;
    if (roomSize >= MAX_ROOM_SIZE) return;
    socket.join(userId);
  });
  socket.on("disconnect", () => {});
});

module.exports = server;

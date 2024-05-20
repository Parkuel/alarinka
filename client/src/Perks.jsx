export default function Perks({selected=[], onChange}) {

    function handleCbClick(ev) {
        const {checked, name} = ev.target
        if(checked) {
            onChange([...selected, name])
        } else {
            // onChange([...selected.filter(selectedName => selectedName !== name)])
            onChange(selected.filter(selectedName => selectedName !== name));
        }
    }

    // function handleCbClick(ev) {
    //     const { checked, name } = ev.target;
    //     onChange(prevSelected => {
    //         if (checked) {
    //             return [...prevSelected, name];
    //         } else {
    //             return prevSelected.filter(selectedName => selectedName !== name);
    //         }
    //     });
    // }

    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-2">
            <label className="flex border py-3 px-4 rounded-2xl gap-2 items-center cursor-pointer" >
                <input type="checkbox" name='wifi' onChange={handleCbClick} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                </svg>
                <span>WiFi</span>
            </label>
            <label className="flex border py-3 px-4 rounded-2xl gap-2 items-center cursor-pointer" >
                <input type="checkbox" name='parking' onChange={handleCbClick} />
                <svg data-name="Layer 1" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.52 3.515A2.5 2.5 0 014.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 01.049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 00.381-.404l.792-1.848zM3 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM6 8a1 1 0 000 2h4a1 1 0 100-2H6zM2.906 5.189l.956-1.913A.5.5 0 014.309 3h7.382a.5.5 0 01.447.276l.956 1.913a.51.51 0 01-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 01-.497-.731z"/>             
                </svg>
                <span>Free Parking</span>
            </label>
            <label className="flex border py-3 px-4 rounded-2xl gap-2 items-center cursor-pointer" >
                <input type="checkbox" name='tv' onChange={handleCbClick} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                <span>TV</span>
            </label>
            <label className="flex border py-3 px-4 rounded-2xl gap-2 items-center cursor-pointer" >
                <input type="checkbox" name='pets' onChange={handleCbClick} />
                <svg data-name="Layer 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z" />
                    <path d="M4.42 11.247A13.152 13.152 0 004 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0112 5c.78 0 1.5.108 2.161.306" />
                </svg>
                <span>Pets Allowed</span>
            </label>
            <label className="flex border py-3 px-4 rounded-2xl gap-2 items-center cursor-pointer" >
                <input type="checkbox" name='food' onChange={handleCbClick} />
                <svg data-name="Layer 1" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20 10a5.268 5.268 0 00-7-2V3h-2v5a5.268 5.268 0 00-7 2c-2 3 3 12 5 12s2-1 3-1 1 1 3 1 7-9 5-12m-1.75 3.38c-.62 2.47-1.84 4.74-3.55 6.62-.2 0-.43-.1-.6-.25a3.34 3.34 0 00-4.2 0c-.17.15-.4.25-.6.25a15.267 15.267 0 01-3.55-6.61c-.25-.73-.3-1.52-.09-2.27A3.37 3.37 0 018.5 9.4c.56.01 1.11.14 1.61.39l.89.45h2l.89-.45c.5-.25 1.05-.38 1.61-.39 1.18.03 2.26.68 2.84 1.71.21.75.16 1.54-.09 2.27M11 5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5z" />
                </svg>
                <span>Food</span>
            </label>
            <label className="flex border py-3 px-4 rounded-2xl gap-2 items-center cursor-pointer" >
                <input type="checkbox" name='entrance' onChange={handleCbClick} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
                <span>Private entrance</span>
            </label>
        </div>
        </>
    )
}
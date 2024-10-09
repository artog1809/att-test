

export const Search = () => {

    return (
        <form className = "form-search">
            <button type="submit">
                <img src="public/icn/search.svg"/>
            </button>
            <input type="text" placeholder="Search for something" />
        </form>
    )
}
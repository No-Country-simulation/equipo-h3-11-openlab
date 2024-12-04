import SearchBar from "../SearchBar"
import InitiativesFilters from "./Filters"
import DataTable from "./DataTable"

const InitiativesContent = () => {
    return (
        <div className="flex flex-col justify-start items-center w-full h-full px-10">
            <div className="w-full h-full p-8 bg-white rounded-2xl shadow">
                <SearchBar />
                <InitiativesFilters />
                <DataTable />
            </div>
        </div>
    )
}

export default InitiativesContent
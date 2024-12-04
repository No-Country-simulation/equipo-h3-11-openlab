import { Heart, Share2 } from "lucide-react"

const DataTable = () => {
    return (
        <table className="table-auto w-full bg-white border-collapse">
            <thead className="bg-blue-200">
                <tr>
                    <th>Name</th>
                    <th>Price Fluctuation</th>
                    <th>Collaborators</th>
                    <th>Buy/Sell Price</th>
                    <th>Tokens</th>
                    <th>Missions</th>
                    <th>Likes</th>
                    <th>Shares</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Fractal</td>
                <td>--</td>
                <td>140</td>
                <td>150/140</td>
                <td>120k/450</td>
                <td>34/346</td>
                <td>100k</td>
                <td>220</td>
                <td></td>
                <td><button>Join</button></td>
                <td><Heart /><Share2 /></td>
            </tr>
            </tbody>
        </table>
    )
}

export default DataTable
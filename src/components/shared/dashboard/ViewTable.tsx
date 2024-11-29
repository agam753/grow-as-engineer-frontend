import { Card } from "@/components/ui/card";

const ViewTable = () => {
  return (
    <Card>
      <table className="">
        <thead>
          <tr>
            <th className=" p-2">Name</th>
            <th className=" p-2">Email</th>
            <th className=" p-2">Role</th>
            <th className=" p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">John Doe</td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default ViewTable;

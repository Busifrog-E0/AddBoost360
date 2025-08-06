import React, { useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import FormDetailsPage from "./FormDetailsPage";
import useGetList from "../../hooks/api/useGetList";
import useDeleteData from "../../hooks/api/useDeleteData";
import Loader from "../../components/Loader";

const FormListPage = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const { deleteData } = useDeleteData({});

  const {
    data: forms,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "forms", initialFilters: { OrderBy: "Index" } });

  const handleDeleteData = (id) => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      deleteData({
        endpoint: `forms/${id}`,
        onsuccess: (result) => {
          if (result) {
            OnDelete();
          }
        },
      });
    }
  };

  const OnDelete = () => {
    getList([]);
  };
  if (selectedForm) {
    return (
      <FormDetailsPage
        form={selectedForm}
        onBack={() => setSelectedForm(null)}
      />
    );
  }

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold text-gray-900 ">Form Submissions</h1>
      <p className="text-gray-600 ">View basic info of all submissions</p>

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          {" "}
          <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-3 px-4 text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 text-gray-700">Email</th>
                  <th className="text-left py-3 px-4 text-gray-700">Phone</th>
                  <th className="text-center py-3 px-4 text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {forms.map((form) => (
                  <tr key={form.DocId} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{form.FullName}</td>
                    <td className="py-3 px-4">{form.Email}</td>
                    <td className="py-3 px-4">{form.Phone}</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center">
                        {/* <button
                      onClick={() => handleDeleteData(form.DocId)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete data"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button> */}
                        <button
                          onClick={() => setSelectedForm(form)}
                          className="text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Full Details</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {forms.length === 0 && (
              <div className="text-center p-8 text-gray-500">
                No submissions yet.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FormListPage;

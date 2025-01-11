"use client";

export default function FormControls({ controls, formData, setFormData }) {
  return controls.map((controllItem) => (
    <div className="mb-4">
      <level className="block text-gray-700 text-sm font-bold mb-2">
        {controllItem.label}
      </level>
      <input
        placeholder={controllItem.placeholder}
        type={controllItem.type}
        name={controllItem.name}
        value={formData[controllItem.name]}
        onChange={(e) => {
          setFormData({
            ...formData,
            [controllItem.name]: e.target.value,
          });
        }}
        className="shadow border rounded w-full py-2 px-3 text-gray-700
      tracking-wide focus:outline-none focus:shadow-outline"
      ></input>
    </div>
  ));
}

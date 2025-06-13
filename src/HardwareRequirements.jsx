// src/HardwareRequirements.jsx
export default function HardwareRequirements({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Hardware Requirements</h2>
      <div className="space-y-4">
        {/* Device Type */}
        <label className="block">
          <span className="font-medium">Device Type</span>
          <select
            name="deviceType"
            value={formData.deviceType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select device</option>
            <option value="Laptop">Laptop</option>
            <option value="Surface Pro">Surface Pro</option>
            <option value="Other">Other (please specify)</option>
          </select>
        </label>
        {formData.deviceType === "Other" && (
          <label className="block">
            <span className="font-medium">Please specify device type</span>
            <input
              name="deviceTypeOther"
              type="text"
              value={formData.deviceTypeOther}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Specify device type"
            />
          </label>
        )}

        {/* Company Mobile */}
        <div></div>
        <label className="inline-flex items-center space-x-2">
          <input
            name="companyMobile"
            type="checkbox"
            checked={formData.companyMobile || false}
            onChange={handleChange}
          />
          <span className="font-medium">Company Mobile</span>
        </label>

        {/* Keyboard & Mouse */}
        <label className="inline-flex items-center space-x-2">
          <input
            name="keyboardMouse"
            type="checkbox"
            checked={formData.keyboardMouse || false}
            onChange={handleChange}
          />
          <span className="font-medium">Keyboard & Mouse</span>
        </label>

        {/* Docking Station */}
        <label className="inline-flex items-center space-x-2">
          <input
            name="dockingStation"
            type="checkbox"
            checked={formData.dockingStation || false}
            onChange={handleChange}
          />
          <span className="font-medium">Docking Station</span>
        </label>

        {/* Monitor */}
        <label className="inline-flex items-center space-x-2">
          <input
            name="monitor"
            type="checkbox"
            checked={formData.monitor || false}
            onChange={handleChange}
          />
          <span className="font-medium">Monitor</span>
        </label>

        {/* Laptop Bag */}
        <label className="block">
          <span className="font-medium">Laptop Bag</span>
          <select
            name="laptopBag"
            value={formData.laptopBag}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select bag type</option>
            <option value="Backpack">Backpack</option>
            <option value="Messenger Bag">Messenger Bag</option>
            <option value="None">None</option>
          </select>
        </label>

        {/* Headset */}
        <label className="block">
          <span className="font-medium">Headset</span>
          <select
            name="headset"
            value={formData.headset}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select headset type</option>
            <option value="Over-ear">Over-ear</option>
            <option value="In-ear">In-ear</option>
            <option value="None">None</option>
          </select>
        </label>

        {/* Any other equipment required */}
        <label className="block">
          <span className="font-medium">Any other equipment required?</span>
          <input
            name="otherEquipment"
            type="text"
            value={formData.otherEquipment}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Please specify"
          />
        </label>

        {/* Courier required */}
        <label className="inline-flex items-center space-x-2">
          <input
            name="courierRequired"
            type="checkbox"
            checked={formData.courierRequired || false}
            onChange={handleChange}
          />
          <span className="font-medium">
            Courier required for equipment delivery
          </span>
        </label>
      </div>
    </div>
  );
}

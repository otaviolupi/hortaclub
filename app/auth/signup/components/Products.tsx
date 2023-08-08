export const Products = ({ setForm, formData }) => (
    <div>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => setForm({ ...formData, name: e.target.value })}
      />
    </div>
  );
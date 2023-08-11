export const About = ({ setForm, formData }) => (
    <div>
      <input
        type="text"
        className="rounded-[10px] border-2 border-[#D6D6D6] bg-white block w-full py-[12px] px-[20px] my-4"
        placeholder="E-mail"
        id="mail"
        value={formData.mail}
        onChange={(e) => setForm({ ...formData, mail: e.target.value })}
      />
      <input
        className="rounded-[10px] border-2 border-[#D6D6D6] bg-white block w-full py-[12px] px-[20px] my-4"
        type="text"
        placeholder="Nome"
        id="name"
        value={formData.name}
        onChange={(e) => setForm({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        className="rounded-[10px] border-2 border-[#D6D6D6] bg-white block w-full py-[12px] px-[20px] my-4"
        placeholder="Celular"
        id="phone"
        value={formData.phone}
        onChange={(e) => setForm({ ...formData, phone: e.target.value })}
      />
    </div>
  );
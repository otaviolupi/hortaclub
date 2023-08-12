import Image from "next/image";

export const When = ({ setForm, formData, timesheet }) => (
    <div>
      <div className="flex mb-8">
        {timesheet.map((item, key) => {
          return (
            <a key={key} className={formData.timesheet == item._id ? "border-4 border-[#FED143] rounded-[20px] bg-[#fed143]/20 flex flex-col items-center justify-center p-[24px] w-[30%] cursor-pointer mx-2" : "border-4 border-white flex flex-col items-center justify-center p-[24px] w-[30%] cursor-pointer mx-2"} onClick={() => setForm({...formData, timesheet: item._id}) }>
              <Image className="h-auto mb-[8px]" src={item.icon} width={54} height={54} alt={item.day} />
              <span className="text-[16px] text-[#5A5A5A] leading-normal font-medium">{item.day}</span>
              <p className="text-[14px] text-[#5A5A5A] leading-normal font-normal">{item.hours}</p>
            </a>
          )
        })}
      </div>
      <div>
        <input
          type="text"
          className="rounded-[10px] border-2 border-[#D6D6D6] bg-white block w-full py-[12px] px-[20px] my-4"
          placeholder="CEP"
          id="cep"
          value={formData.cep}
          onChange={(e) => setForm({ ...formData, cep: e.target.value })}
        />
        <input
          type="text"
          className="rounded-[10px] border-2 border-[#D6D6D6] bg-white block w-full py-[12px] px-[20px] my-4"
          placeholder="Endereço"
          id="address"
          value={formData.address}
          onChange={(e) => setForm({ ...formData, address: e.target.value })}
        />
        <div className="flex">
          <input
            type="text"
            className="rounded-[10px] border-2 border-[#D6D6D6] bg-white block w-full py-[12px] px-[20px] mr-2"
            placeholder="Número"
            id="number"
            value={formData.number}
            onChange={(e) => setForm({ ...formData, number: e.target.value })}
          />
          <input
            type="text"
            className="rounded-[10px] border-2 border-[#D6D6D6] bg-white block w-full py-[12px] px-[20px] ml-2"
            placeholder="Complemento"
            id="complement"
            value={formData.complement}
            onChange={(e) => setForm({ ...formData, complement: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
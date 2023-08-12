import Image from "next/image";

export const Box = ({ setForm, formData, box, delivery }) => (
    <div>
      {box.map((item, key) =>{
        return (
            <a key={key} className={formData.box == item._id ? "items-center border-4 border-[#FED143] rounded-[20px] bg-[#fed143]/20 flex p-[20px] my-4 cursor-pointer" : "flex border-4 border-white p-[20px] my-4 cursor-pointer items-center"} onClick={(e) => setForm({ ...formData, box: item._id })}>
              <Image className="h-auto" src={item.image} width="64" height="64" alt={item.title} />
              <div className="ml-[19px]">
                <h1 className="text-[16px] text-[#5A5A5A] leading-normal font-medium">{item.title}</h1>
                <p className="text-[14px] text-[#5A5A5A] leading-normal font-normal">{item.description}</p>
                <span className="text-[16px] text-[#41AE59] leading-normal font-bold"><b className="text-[22px]">{item.price}</b> /cesta</span>
              </div>
            </a>
        )
      })}

      <div className="mt-[53px] flex justify-center">
        {delivery.map((item, key) => {
          return (
            <a key={key} className={formData.delivery == item._id ? "rounded-[100px] bg-[#FED143] flex justify-center text-[#3F3F3F] text-[14px] leading-normal py-[7px] px-[13px] mr-[7px] font-semibold cursor-pointer flex-1 max-w-[30%]" : "rounded-[100px] bg-[#EAEAEA] flex justify-center text-[#3F3F3F] text-[14px] leading-normal py-[7px] px-[13px] mr-[7px] font-semibold cursor-pointer flex-1 max-w-[30%]"} onClick={(e) => setForm({ ...formData, delivery: item._id })}>{item.label}</a>
          )
        })}
      </div>
    </div>
  );
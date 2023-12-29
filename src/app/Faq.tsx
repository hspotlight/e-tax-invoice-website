import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Typography } from "@mui/material";
import React from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  //   {
  //     question: "เว็ปไซต์นี้แก้ปัญหาอะไร",
  //     answer:
  //       "เว็ปสรรพากรปล่อยข้อมูลร้านค้าให้สามารถค้นหาได้ด้วยแค่ เลขประจำตัวผู้เสียภาษีอากร ซึ่งการจะรู้เลขนี้ได้ทำได้ยากและต้องไปเช็คกับระบบอื่น ทางผู้พัฒนาเว็ปไซต์นี้เล็งเห็นปัญหานี้จึงได้ดึงข้อมูลมาแสดงผลและทำให้ค้นหาได้ด้วยชื่อร้านค้าหรือชื่อผู้เสียภาษีแทน",
  //   },
  {
    question: "ข้อมูลจากเว็ปไซต์นี้มาจากไหน ข้อมูลอัพเดทไหม",
    answer:
      "เว็ปไซต์นี้ดึงข้อมูลจากเว็ปไซต์สรรพากรจึงมั่นใจได้ว่าข้อมูลมีความถูกต้อง ระบบจะทำการอัพเดทข้อมูลกับเว็ปไซต์สรรพากรทุกๆ 12 ชม (ประมาณ 7 โมง และ 1 ทุ่ม เวลาไทย)",
  },
  {
    question: "ซื้อของในลาซาด้าและช้อปปี้ยังต้องติดต่อร้านค้าอยู่อีกไหม",
    answer: "ยังต้องตรวจสอบกับทางร้านค้าอีกทีหนึ่งว่าร้านค้าสามารถออกในให้ได้ไหม",
    // (
    //   <div>
    //     สามารถศึกษาเพิ่มเติมได้ที่{" "}
    //     <a href="https://www.lazada.co.th/helpcenter/easy-e-receipt-235588.html">
    //       ลิ้งนี้
    //     </a>
    //   </div> 
    // ),
  },
  // {
  //     question: "ลาซาด้าและลาซาด้า express ในระบบมันมีความหมายอย่างไร",
  //     answer: "คือใบเสร็จที่ออกให้เมื่อทำการใช้บริการของเขา เช่นจ่ายค่าธรรมเนียมการจ่ายค่าไฟ หรือ การจ่ายค่าบริการขนส่ง",
  // },
];

const FaqItem = ({ item }: { item: FaqItem }) => {
  const [expand, setExpand] = React.useState<boolean>(false);
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <Typography variant="body1">{item.question}</Typography>
        {expand ? (
          <IconButton onClick={() => setExpand(false)}>
            <KeyboardArrowUpIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setExpand(true)}>
            <KeyboardArrowDownIcon />
          </IconButton>
        )}
      </div>
      {expand && (
        <div>
          <Typography variant="body2">
            <b>คำตอบ:</b> {item.answer}
          </Typography>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="mt-8 max-w-100">
      <Typography variant="h6" className="mb-4">
        คำถามที่พบบ่อย
      </Typography>
      {faqItems.map((item) => {
        return <FaqItem key={item.question} item={item} />;
      })}
    </div>
  );
};

export default Faq;

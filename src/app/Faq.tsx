/* eslint-disable @next/next/no-img-element */
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Link, Typography } from "@mui/material";
import React, { ReactElement } from "react";

type FaqItem = {
  question: string;
  answer: ReactElement | string;
};

const faqItems: FaqItem[] = [
  {
    question: "เว็ปไซต์นี้แก้ปัญหาอะไร",
    answer: (
      <Typography>
        <Link
          href="https://etax.rd.go.th/etax_staticpage/app/#/index/registered#top"
          target="_blank"
          rel="noopener"
        >
          เว็ปต้นทางของสรรพากร
        </Link>
        ปล่อยข้อมูลร้านค้าให้สามารถค้นหาได้ด้วยแค่ เลขประจำตัวผู้เสียภาษีอากร
        ซึ่งการจะรู้เลขนี้ได้ทำได้ยากและต้องไปเช็คกับระบบอื่น
        ทางผู้พัฒนาเว็ปไซต์นี้เล็งเห็นปัญหานี้จึงได้ดึงข้อมูลมาแสดงผลและทำให้ค้นหาได้ด้วยชื่อร้านค้าหรือชื่อผู้เสียภาษีแทน
        และต้องการเป็นส่วนหนึ่งที่ช่วยทำให้ process ในการตรวจสอบนี้ง่ายขึ้น
        โดยการรวบรวมข้อมูลสำคัญไว้ที่เว็ปไซต์นี้
      </Typography>
    ),
  },
  {
    question: "ข้อมูลจากเว็ปไซต์นี้มาจากไหน ข้อมูลอัพเดทไหม",
    answer:
      "เว็ปไซต์นี้ดึงข้อมูลจากเว็ปไซต์สรรพากรจึงมั่นใจได้ว่าข้อมูลมีความถูกต้องระบบจะทำการอัพเดทข้อมูลกับเว็ปไซต์สรรพากรทุกๆ 12 ชม (ประมาณ 7 โมง และ1ทุ่ม เวลาไทย)",
  },
  {
    question: "ซื้อของในลาซาด้าและช้อปปี้ยังต้องติดต่อร้านค้าอยู่อีกไหม",
    answer: (
      <>
        ยังต้องตรวจสอบกับทางร้านค้าอีกทีหนึ่งว่าร้านค้าสามารถออกในให้ได้ไหม
        สามารถศึกษาเพิ่มเติมได้ที่{" "}
        <Link
          href="https://www.lazada.co.th/helpcenter/easy-e-receipt-235588.html"
          target="_blank"
          rel="noopener"
        >
          ลิ้งนี้
        </Link>
      </>
    ),
  },
  {
    question:
      "เมื่อร้านค้าบอกว่าสามารถออกใบกำกับภาษี e-tax ได้ เราจะตรวจสอบได้ใบกำกับภาษีกับสรรพากรได้อย่างไร",
    answer: (
      <>
        ทางสรรพากรได้เตรียมเว็ปไซต์สำหรับการตรวจสอบใบเสร็จได้ โดยเราสามารถ
        upload ใบเสร็จที่
        <Link
          href="https://validation.teda.th/webportal/v2/#/validate"
          target="_blank"
          rel="noopener"
        >
          เว็ปไซต์นี้
        </Link>
        ได้ ดูรายละเอียดเพิ่มเติมในรูปหรือเข้าไปที่{" "}
        <Link
          href="https://etax.rd.go.th/etax_staticpage/app/#/index/webvalidation#top"
          target="_blank"
          rel="noopener"
        >
          ลิ้งนี้
        </Link>
        <img
          src="/etax-receipt-validation.png"
          width={957}
          height={476}
          alt="etax-receipt-validation"
        />
      </>
    ),
  },
  {
    question: "ตัวอย่างใบกำกับภาษี e-tax-invoice",
    answer: (
      <>
        ทางเฟสบุ๊คเพจ TaxBugnoms
        ได้ลงรูปตัวอย่างของใบกำกับภาษีที่ใช้ลดหย่อยภาษีได้
        พร้อมจุดที่ต้องสังเกตุในใบกำกับภาษีครับ{" "}
        <Link
          href="https://www.facebook.com/TaxBugnoms/posts/pfbid02fFfWRgP9i1ec2GvUXrAhu4PaNioKDd7366nTr7gfJXnZmzCGKjECZxDxsxsrxTR6l"
          target="_blank"
          rel="noopener"
        >
          ลิ้งค์ต้นทาง
        </Link>
      </>
    ),
  },
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

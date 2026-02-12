"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MirrorPage() {
  const router = useRouter();
  const reasons = [
    "Чиний сайхан сэтгэл",
    "Хөөрхөн инээмсэглэл",
    "Хамтдаа ирээдүйг хамгийн сайхнаар төсөөлж чаддаг",
    "Намайг өдөр бүр догдлуулдагт чинь",
    "Хүслэнгийн бүх зүйл надад таалагддаг",
  ];

  const fullLetter = [
    "Сайн байна уу Хүслэн минь 💌",
    "Энэ захидлыг чи уншихад миний зүрх чинь чамдаа зориулж догдолж байна.",
    "Бидний хамт өнгөрүүлсэн мөч бүр надад үнэ цэнэтэй бөгөөд чи миний амьдралын хамгийн гэрэлтэй хэсэг юм.",
    "Чамтайгаа байхдаа би өөрийгөө хамгийн аз жаргалтай хүн гэж мэдэрдэг.",
    "Чи миний инээмсэглэл, миний хүч, миний урам зориг юм.",
    "Хайртайгаа хамт өнгөрүүлсэн бүх мөч бүрт баярлалаа гэж хэлмээр байна.",
    "Үүрд чамтай хамт байхыг хүсэж байна. 💖",
    "Чинийх,",
    "[Таны нэр]",
  ];

  const [showLetter, setShowLetter] = useState(false);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    if (showLetter) {
      let index = 0;
      const interval = setInterval(() => {
        setVisibleLines((prev) => [...prev, fullLetter[index]]);
        index++;
        if (index >= fullLetter.length) clearInterval(interval);
      }, 600);
      return () => clearInterval(interval);
    }
  }, [showLetter]);

  return (
    <div className="min-h-screen bg-[#ffb6c1] font-sans p-6 md:p-12 flex flex-col items-center">
      <div className="text-[#ff4d6d] text-3xl md:text-5xl mb-6 tracking-widest">
        💞💞💞💞💞💞💞💞
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-12 text-center">
        Чамтайгаа үхэн үхтлээ хамт
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl w-full">
        <div className="relative flex justify-center md:justify-start">
          <div className="bg-white p-4 md:p-6 border-[6px] border-dashed border-[#ff8fa3] shadow-2xl rotate-[-2deg] w-64 md:w-80 lg:w-96">
            <img
              src="/couples.jpg"
              alt="Хосууд"
              className="w-full h-auto object-cover grayscale rounded-xl"
            />
          </div>
          <span className="absolute -top-4 -right-4 text-4xl md:text-5xl lg:text-6xl">
            ❤️
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 text-center md:text-left">
            Хүслэнд хайртай байх шалтгаан
          </h2>

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center bg-white px-6 md:px-8 py-4 md:py-5 rounded-2xl shadow-lg w-full"
            >
              <div className="bg-[#ff4d6d] text-white w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs md:text-sm mr-4 shrink-0">
                ✓
              </div>
              <span className="text-gray-700 font-medium text-sm md:text-base lg:text-lg">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
      {!showLetter && (
        <button
          onClick={() => setShowLetter(true)}
          className="mt-12 bg-[#c92a2a] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-2xl hover:bg-red-700 transition-colors text-sm md:text-base lg:text-lg"
        >
          Захидлыг нээх 💌
        </button>
      )}

      {showLetter && (
        <div className="relative mt-16 w-full max-w-4xl bg-[#fff8f0] shadow-2xl rounded-3xl p-10 md:p-16 border border-[#ffdede] flex flex-col items-center">
          <div className="w-full mb-6">
            <img
              src="/coupleCats.gif"
              alt="Couple Cats"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>

          <div className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed">
            <p className="mb-4 text-xl">Чамдаа зориулсан захидал 💌</p>
            <p className="mb-4">
              Чамтай учирснаас хойш миний ертөнц илүү гэрэлтэй, илүү дулаахан
              болсон. Чамайг бодох бүрт миний жижигхэн царайнд томоос том мишээл
              тодорч яг л хамтдаа байгаа мэт сайхан мэдрэмж өгдөг шүү.
            </p>
            <p className="mb-4">
              Чи минь үргэлж намайг сонсож ойлгож, хүндэлж чаддаг 💞 хайрынхаа
              хамгийн хамгийнан шүү. Хайртайгаа үргэлж нээлттэй ярилцаж байдагт
              баярлалаа 💞.
            </p>
            <p className="mb-4">
              Хэдхэн сарын дараа уулзаж өдөр бүр хамтдаа байж амьдралынхаа хором
              бүрийг чамтайгаа өнгрөөхийг хүсэж байна аа.
            </p>
            <p className="mb-4">Хайртай шүү хайр аа 💞.</p>
            <p className="mb-4">Үүрд чамтай хамт байхыг хүсэж байна. 💖</p>
          </div>
        </div>
      )}
      <button
        className="fixed bottom-8 mt-10 right-8 bg-[#c92a2a] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors"
        onClick={() => router.push("/yesOfCourse")}
      >
        Буцах ←
      </button>
    </div>
  );
}

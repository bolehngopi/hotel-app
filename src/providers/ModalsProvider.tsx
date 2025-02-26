"use client";

import LoginModal from "@/components/modal/LoginModal";
import RegisterModal from "@/components/modal/RegisterModal";
import RentModal from "@/components/modal/RentModal";

const modalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <RentModal />
      {/*<SearchModal />*/}
    </>
  );
};

export default modalProvider;

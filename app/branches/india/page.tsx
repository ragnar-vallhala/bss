"use client";
import dynamic from "next/dynamic";
import Layout from "@/app/components/Layout";

const IndiaBranchesMap = dynamic(() => import("@/app/components/IndiaBranchesMap"), {
  ssr: false,
});

export default function WorldBranchesPage() {
  return (
    <Layout>
      <IndiaBranchesMap />
    </Layout>
  );
}

"use client";
import dynamic from "next/dynamic";
import Layout from "@/app/components/Layout";

const WorldBranchesMap = dynamic(() => import("@/app/components/WorldBranchesMap"), {
  ssr: false,
});

export default function WorldBranchesPage() {
  return (
    <Layout>
      <WorldBranchesMap />
    </Layout>
  );
}

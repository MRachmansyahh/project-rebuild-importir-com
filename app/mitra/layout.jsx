import HeaderMitra from "./HeaderMitra";

export default function MitraLayout({ children }) {
  return (
    <section>
      <HeaderMitra />
      {children}
    </section>
  );
}

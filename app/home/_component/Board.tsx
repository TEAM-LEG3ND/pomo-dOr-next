import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  addon?: ReactNode;
}

function Board({ title = "", addon = null, children }: Props) {
  return (
    <section className="flex flex-col gap-4 py-6">
      {title === "" && addon === null ? null : (
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-gray-800">{title}</h2>
          {addon}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}

export default Board;

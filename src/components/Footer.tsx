// Icons
import { PropsWithChildren } from "react";
import { Github, Twitter, Link } from "../components/Icons";

export const Footer: React.FC = () => (
  <footer className="px-6 mt-24 text-gray-900 bg-center bg-cover shadow-md md:px-0 bg-gray-200/40">
    <div className="mx-auto text-center py-14 md:w-3/12 md:px-0">
      <div className="flex flex-col space-y-8">
        <div className="space-y-4">
          <Title>Movie App</Title>
        </div>
      </div>
    </div>
  </footer>
);

const Title = ({ children }: PropsWithChildren) => (
  <span className="text-xl font-semibold">{children}</span>
);

export default Footer;

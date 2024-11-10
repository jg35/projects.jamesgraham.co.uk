import SocialLink from "@/app/components/SocialLink";
import GithubIcon from "@/app/components/icons/Github";
import CodepenIcon from "@/app/components/icons/Codepen";
import LinkedInIcon from "@/app/components/icons/LinkedIn";

export default function Footer() {
  return (
    <footer className="sm:text-center w-full text-xs mt-auto bg-black text-white mx-auto p-4">
      <div className="flex sm:justify-center">
        <SocialLink title="Github profile" href="https//www.github.com/jg35">
          <GithubIcon />
        </SocialLink>
        <SocialLink
          title="LinkedIn profile"
          href="https://linkedin.com/in/jamesgraham10"
        >
          <LinkedInIcon />
        </SocialLink>
        <SocialLink
          title="Codepen profile"
          href="https://codepen.io/jamesgraham10"
        >
          <CodepenIcon />
        </SocialLink>
      </div>
      <p className="pt-6">© 2024 James Graham. All Rights Reserved.</p>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";      // ใช้ Image ของ Next.js เพื่อ optimize
import styles from "./topmenuitem.module.css";

type TopMenuItemProps = {
  href: string;
  label: string;
  iconSrc?: string;
};

export default function TopMenuItem({ href, label, iconSrc }: TopMenuItemProps) {
  return (
    <Link href={href} className={styles.menuItem}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={label}
          width={40}
          height={40}
          className={styles.icon}
        />
      )}
      <span>{label}</span>
    </Link>
  );
}

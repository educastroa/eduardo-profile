export const generateSocialIcons = (iconsData, color) => {
  return iconsData.map((icon, i) => {
    const Icon = icon.name;
    return (
      <a key={i} href={`${icon.link}`} className="pl-4">
        <Icon className={`text-2xl text-${color} hover:text-yellow`} />
      </a>
    );
  });
};

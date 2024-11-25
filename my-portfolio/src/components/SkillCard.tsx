const SkillCard = ({ skill }: { skill: string }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-all">
      <p className="text-lg font-medium">{skill}</p>
    </div>
  );
};

export default SkillCard;

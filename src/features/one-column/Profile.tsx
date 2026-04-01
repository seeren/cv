type ProfileProps = {
  profile: string[];
};

function Profile({ profile }: ProfileProps) {
  return (
    <section className="py-3">
      <div className="flex items-start gap-5">
        <div className="w-[120px] shrink-0 text-right">
          <h2 className="text-sm font-bold uppercase leading-tight tracking-normal text-gray-900">
            À propos
          </h2>
        </div>
        <div className="flex-1 pb-4 space-y-1.5 text-xs leading-relaxed text-gray-900 border-b border-gray-300 ">
          {profile.map((paragraph, index) => (
            <p key={index} className="text-left hyphens-auto">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;

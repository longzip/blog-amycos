export default function Avatar({ author }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <img src={author.node.avatar.url} className="rounded-full" alt={name} />
      </div>
      <div className="text-xl font-bold">
        <a target="_blank" href={author.node.url}>
          {name}
        </a>
      </div>
    </div>
  );
}

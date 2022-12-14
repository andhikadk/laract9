import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
  const prev = meta.links[0].url;
  const next = meta.links[meta.links.length - 1].url;
  const current = meta.current_page;
  const page = (page) => {
    return `?page=${page}`;
  };

  return (
    <div className="btn-group">
      {prev && (
        <Link href={prev} className="btn">
          «
        </Link>
      )}

      {/* {prev && (
        <Link href={page(current - 1)} className="btn">
          {current - 1}
        </Link>
      )} */}

      <Link href={page(current)} className="btn">
        {current}
      </Link>

      {/* {next && (
        <Link href={page(current + 1)} className="btn">
          {current + 1}
        </Link>
      )} */}

      {next && (
        <Link href={next} className="btn">
          »
        </Link>
      )}
    </div>
  );
};

export default Paginator;

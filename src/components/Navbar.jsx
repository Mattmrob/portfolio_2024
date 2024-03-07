export default function Nav({ links }) {
    return (
            <nav>
                <ul className="navitemcontainer">
                    {links.map((link) => link)}
                </ul>
            </nav>
    );
  }
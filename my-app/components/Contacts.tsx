type ContactsProps = {
  title?: string;
  address?: string;
  phone?: string;
  email?: string;
};

export default function Contacts({
  title,
  address,
  phone,
  email,
}: ContactsProps) {
  return (
    <div className="my-6 p-4 border rounded-lg shadow-sm bg-gray-500">
      {title && <h2 className="text-xl font-bold mb-3">{title}</h2>}

      <ul className="space-y-2 text-gray-800">
        {address && (
          <li>
            <strong>Address:</strong> {address}
          </li>
        )}
        {phone && (
          <li>
            <strong>Phone:</strong>{' '}
            <a href={`tel:${phone}`} className="text-blue-600">
              {phone}
            </a>
          </li>
        )}
        {email && (
          <li>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${email}`} className="text-blue-600">
              {email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

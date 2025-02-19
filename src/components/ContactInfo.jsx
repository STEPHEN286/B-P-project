function ContactInfo({ icon, title, content, link }) {
    return (
      <div className="flex items-start ">
        <i className={`${icon} text-indigo-600 mt-1`}></i>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          {link ? (
            <a href={link} className="text-gray-600">{content}</a>
          ) : (
            <p className="text-gray-600">{content}</p>
          )}
        </div>
      </div>
    );
  }
  
  export default ContactInfo;
  
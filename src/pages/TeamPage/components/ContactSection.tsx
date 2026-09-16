import ContactPartnersSection from '../../../components/ContactPartnersSection';

interface ContactSectionProps {
    language: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
    return <ContactPartnersSection language={language} />;
};

export default ContactSection;

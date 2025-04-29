export const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `${window.location.origin}/Portfolio/Murtaza_Mazhar_resume.pdf`; // Adjusted for subdirectory
    link.download = 'Murtaza_Mazhar_resume.pdf'; // Desired filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
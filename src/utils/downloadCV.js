export const downloadCV = () => {
    // Replace this URL with your actual CV PDF file URL
    const cvUrl = '/Murtaza_Mazhar_CV.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Murtaza_Mazhar_CV.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}; 
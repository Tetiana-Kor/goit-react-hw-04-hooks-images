// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// export default function ImageGalleryInfo({ imageName }) {
//   const [images, setImages] = useState('');
//   const [status, setStatus] = useState(Status.IDLE);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     if (!imageName) {
//       return;
//     }

//     setStatus(Status.PENDING);

//     pixabayAPI
//       .fetchImage(imageName, currentPage)
//       .then(images => {
//         if (images.total === 0) {
//           toast.dark('No images. Please try another query!');
//           setStatus(Status.REJECTED);

//           return;
//         }

//         setImages(prevState => [...prevState, ...images.hits]);
//         setStatus(Status.RESOLVED);
//       })
//       .catch(error => {
//         setError(error);
//         setStatus(Status.REJECTED);
//       })
//       .finally(() => {
//         setTimeout(() => {
//           window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: 'smooth',
//           });
//         }, 500);
//       });
//   }, [currentPage, imageName, error]);

//   const onClickLoadMore = () => {
//     setCurrentPage(prevState => prevState + 1);
//   };

//   return (
//     <>
//       {status === Status.IDLE && (
//         <div
//           style={{
//             margin: '20px auto',
//             textAlign: 'center',
//             fontSize: '20px',
//           }}
//         >
//           Please, enter a query!
//         </div>
//       )}
//       {images.length > 0 && (
//         <>
//           <ImageGallery images={images} />
//           <Button onClickLoadMore={onClickLoadMore} />
//         </>
//       )}

//       {status === Status.PENDING && (
//         <div>
//           <Loader
//             type="Circles"
//             color="#00BFFF"
//             height={100}
//             width={100}
//             timeout={3000} //3 secs
//           />
//         </div>
//       )}
//       {status === Status.REJECTED && null}
//     </>
//   );
// }

// ImageGalleryInfo.propTypes = {
//   imageName: PropTypes.string.isRequired,
// };

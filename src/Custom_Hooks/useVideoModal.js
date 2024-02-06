

const useVideoModal = (videoId) => {
		const modal = document.createElement('div');
		modal.className = 'modall';
		modal.innerHTML = `<div className="modal-contentt"><iframe width="1086" height="611" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay;"></iframe></div>`;
		document.body.appendChild(modal);

	
		modal.addEventListener('click', function () {
			document.body.removeChild(modal);
		});
	
};
export default useVideoModal
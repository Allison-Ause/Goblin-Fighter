export default function createAddJerk(root, handlers) {
    const handleAddJerk = handlers.handleAddJerk;

    const form = root.querySelector('.form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleAddJerk(formData.get('jerk-name'));
        form.reset();
    });
    return () => {

    };
}


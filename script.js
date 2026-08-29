document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('fullName').value;
        const button = form.querySelector('button');

        // Feedback interactivo en el CTA
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        button.disabled = true;

        setTimeout(() => {
            button.style.backgroundColor = '#10b981';
            button.innerHTML = '<i class="fa-solid fa-check"></i> Request Confirmed!';
            
            // Reemplazo limpio de formulario
            form.innerHTML = `
                <div style="text-align: center; padding: 2rem 0;">
                    <i class="fa-solid fa-circle-check" style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;"></i>
                    <h4>Thank you, ${name}!</h4>
                    <p style="color: #64748b; font-size: 0.9rem; margin-top: 0.5rem;">Our medical coordinator will call you within 15 minutes to confirm your time slot.</p>
                </div>
            `;
        }, 1200);
    });
});
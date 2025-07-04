
import '../styles/PasswordResetModal.css'; 

function PasswordResetModal({ show, onClose, onSubmit, email, setEmail }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Restablecer contraseña</h3>
        <p>Ingresa tu correo electrónico para enviarte instrucciones.</p>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" style={{ background: '#01403A' }}>Enviar</button>
          <button type="button" className="modal-close" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default PasswordResetModal;
.doctor-card {
  display: flex;
  align-items: flex-start;
  background-color: #007BFF; /* Blue background color */
  padding: 20px;
  border-radius: 20px;
  margin: 0 auto 20px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  max-width: 500px;
  position: relative;
  overflow: hidden; /* Hide overflowing content for decoration */
}

.doctor-name {
  font-size: 24px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: -20px;
  left: 20px;
  color: #ffffff;
  background-color: #000000;
  padding: 5px 10px;
  border-radius: 5px;
}

.doctor-content {
  display: flex;
  align-items: center;
}

.doctor-image {
  width: 220px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.doctor-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

.doctor-info {
  flex: 1;
  text-align: right;
}

.doctor-bio {
  padding-top: 10px;
}

/* White diagonal lines for decoration */
.doctor-card::after {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  transform: rotate(45deg);
  right: -40px;
  bottom: -40px;
}

/* Media Query for smaller devices */
@media (max-width: 768px) {
  .doctor-card {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .doctor-image {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 10px;
  }

  .doctor-details {
    text-align: center;
  }
}

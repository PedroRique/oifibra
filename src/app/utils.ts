export const openWpp = (message?: string) => {
  window.open("https://wa.me/5511916627319");
};

export const openPhone = () => {
  document.location.href = "tel:08007292621";
};

export const showPhone = () => {
  const actualDate = new Date();
  const actualWeekDay = actualDate.getDay();
  const actualHour = actualDate.getHours();

  const actualDay = actualDate.getDate();
  const actualMonth = actualDate.getMonth();

  if (actualDay === 1 && actualMonth === 4) {
    return false;
  }

  if (
    actualWeekDay >= 1 &&
    actualWeekDay <= 5 &&
    actualHour >= 9 &&
    actualHour < 20
  ) {
    return true;
  }

  if (actualWeekDay === 6 && actualHour >= 10 && actualHour < 16) {
    return true;
  }

  return false;
};

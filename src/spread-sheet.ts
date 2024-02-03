export const writeToSpreadsheet = () => {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('シート1');

  sheet.getRange('A1').setValue('こんにちは');
};

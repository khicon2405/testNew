import { TestBed, inject } from "@angular/core/testing";
import {
  ChartHelper,
  CurrencyHelper,
  StrengthPassword,
  DateTimeHelper,
  StatusHelper,
} from ".";
import { Router } from "@angular/router";

describe("Helper test", () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        // HttpClientTestingModule,
        // TranslateModule.forRoot({
        //   loader: {
        //     provide: TranslateModule,
        //     useClass: TranslateFakeLoader,
        //     deps: [HttpClient],
        //   },
        // }),
        // MaterialModule,
        // ToastrModule.forRoot(),
        // BrowserAnimationsModule,
      ],
      providers: [],
    });
  });

  it("Chart Helper ", inject([], () => {
    const genDateofTheMonth = ChartHelper.genDateofTheMonth(true);
    const genFullDateofTheMonth = ChartHelper.genFullDateofTheMonth(true);
    const genFullHourOfDay = ChartHelper.genFullHourOfDay(20);
    const genFullDays = ChartHelper.genFullDays(20);
    const genFullDays30 = ChartHelper.genFullDays30(20);
    expect(genDateofTheMonth).toBeTruthy();
    expect(genFullDateofTheMonth).toBeTruthy();
    expect(genFullHourOfDay).toBeTruthy();
    expect(genFullDays).toBeTruthy();
    expect(genFullDays30).toBeTruthy();
  }));
  it("Curency Helper ", inject([], () => {
    const convertToVnCurrency = CurrencyHelper.convertToVnCurrency(5000);
    const convertToVnCurrencyZero = CurrencyHelper.convertToVnCurrency(0);
    const convertToCurrency = CurrencyHelper.convertToCurrency(5000);
    expect(convertToCurrency).toBeTruthy();
    expect(convertToVnCurrencyZero).toEqual(0);
    expect(convertToVnCurrency).toBeTruthy();
  }));
  it("Password Helper ", inject([], () => {
    const convertToVnCurrency = StrengthPassword.checkStrengthPassword(
      "abc@12345"
    );
    expect(convertToVnCurrency).toBeTruthy();
  }));
  it("Datetime Helper ", inject([], () => {
    const convertToVnCurrency = DateTimeHelper.shortFormat(
      new Date(2020, 8, 10, 0, 0, 0)
    );
    expect(convertToVnCurrency).toBeTruthy();
  }));
  it("Status Helper ", inject([], () => {
    const getStatusColor00 = StatusHelper.getStatusColor("00");
    const getStatusColor01 = StatusHelper.getStatusColor("01");
    const getStatusColor02 = StatusHelper.getStatusColor("02");
    const getStatusColor04 = StatusHelper.getStatusColor("04");
    const getStatusColor05 = StatusHelper.getStatusColor("05");
    const getStatusColor06 = StatusHelper.getStatusColor("06");
    expect(getStatusColor00).toBeTruthy();
  }));
});

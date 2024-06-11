import { describe, expect, test } from "@jest/globals";
import { formatAndDivideNumber } from "../lib/utils";

describe("format and divide a number so that if it is a large number it will be shortened to make it easliy readable", () => {
  test("format numbers < 1000", () => {
    expect(formatAndDivideNumber(100)).toBe("100");
    expect(formatAndDivideNumber(550)).toBe("550");
    expect(formatAndDivideNumber(999)).toBe("999");
  });

  test("format numbers between 0 and 100", () => {
    expect(formatAndDivideNumber(100)).toBe("100");
    expect(formatAndDivideNumber(5)).toBe("5");
    expect(formatAndDivideNumber(1)).toBe("1");
  });

  test("formats numbers from 1000 to 999999 into thousands up to one decimal place", () => {
    expect(formatAndDivideNumber(1000)).toBe("1K");
    expect(formatAndDivideNumber(1200)).toBe("1.2K");
    expect(formatAndDivideNumber(1020)).toBe("1K");
    expect(formatAndDivideNumber(1005)).toBe("1K");
    expect(formatAndDivideNumber(999999)).toBe("999.9K");
    expect(formatAndDivideNumber(54000)).toBe("54K");
    expect(formatAndDivideNumber(15999)).toBe("15.9K");
    expect(formatAndDivideNumber(98765)).toBe("98.7K");
    expect(formatAndDivideNumber(4321)).toBe("4.3K");
    expect(formatAndDivideNumber(456789)).toBe("456.7K");
  });

  test("formats numbers more than 1000000", () => {
    expect(formatAndDivideNumber(2000000)).toBe("2M");
    expect(formatAndDivideNumber(54333332)).toBe("54.3M");
    expect(formatAndDivideNumber(1000000)).toBe("1M");
    expect(formatAndDivideNumber(2999999)).toBe("2.9M");
    expect(formatAndDivideNumber(7500000)).toBe("7.5M");
    expect(formatAndDivideNumber(123456789)).toBe("123.4M");
    expect(formatAndDivideNumber(87654321)).toBe("87.6M");
  });

  test("formats negative numbers and return 0", () => {
    expect(formatAndDivideNumber(-2000000)).toBe("0");
    expect(formatAndDivideNumber(-543)).toBe("0");
    expect(formatAndDivideNumber(-3.4)).toBe("0");

   
  });
});

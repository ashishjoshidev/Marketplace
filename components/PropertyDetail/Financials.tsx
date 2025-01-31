'use client';
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Slider } from '@/components/ui/slider';
import ColumnChart from './charts/ColumnChart';

const Financials: React.FC<{
  propertyPrice: number;
  totalShares: number;
  annualYield: number;
  repaymentDuration: number;
}> = ({ propertyPrice, totalShares, annualYield, repaymentDuration }) => {
  const [selectedTokens, setSelectedTokens] = useState<number>(20);

  const proyectedRentalYield = annualYield / 100;
  const tokenPrice = propertyPrice / totalShares;
  const investment = tokenPrice * selectedTokens;
  const rentalIncomePerToken = tokenPrice * proyectedRentalYield;
  const annualRentalIncome = investment * rentalIncomePerToken;
  const monthlyRentalIncome = annualRentalIncome / 12;
  const annualCapitalRepayment = investment / (repaymentDuration / 12);
  const monthlyCapitalRepaymentPerToken =
    investment / totalShares / repaymentDuration;
  const monthlyCapitalRepayment = annualCapitalRepayment / 12;
  const annualRepayment = annualCapitalRepayment + annualRentalIncome;
  const monthlyRepayment = annualRepayment / 12;

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setSelectedTokens(newValue);
  };
  const handleSliderValueChange: (newValue: number[]) => void = (newValue) => {
    setSelectedTokens(newValue[0]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-4">
        <Table className="h-full">
          <TableBody className="border rounded-[5px]">
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Token Price:</TableCell>
              <TableCell className="text-opacity-80">
                $ {tokenPrice.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Total Tokens:</TableCell>
              <TableCell className="text-opacity-80">{totalShares}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table className="h-full">
          <TableBody className="border rounded-[5px]">
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Market Value:</TableCell>
              <TableCell className="text-opacity-80">
                ${propertyPrice}
              </TableCell>
            </TableRow>
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium ">Income per Token:</TableCell>
              <TableCell className="text-opacity-80">
                ${rentalIncomePerToken.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* <Table className="h-full">
          <TableBody className="border rounded-[5px]">
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Capital Repayment:</TableCell>
              <TableCell className="text-opacity-80">
                {annualCapitalRepayment}%
              </TableCell>
            </TableRow>
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Repayment Term:</TableCell>
              <TableCell className="text-opacity-80">
                {repaymentDuration} months
              </TableCell>
            </TableRow>
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium">Monthly Capital Repayment:</TableCell>
              <TableCell className="text-opacity-80">$ {monthlyCapitalRepaymentPerToken} per token</TableCell>
            </TableRow>
            <TableRow className="odd:bg-[#F5F5F5]">
              <TableCell className="font-medium ">Annual Repayment:</TableCell>
              <TableCell className="text-opacity-80">
                ${annualRepayment} 
              </TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
      </div>

      <div className="w-full">
        <ColumnChart
          type="ColumnChart"
          width="400"
          height="400"
          monthlyIncome={monthlyRentalIncome}
        />
        <p className="text-slate-400 text-center">
          Accumulative Rental Income per Month
        </p>
      </div>

      <div>
        <div className="flex gap-6 items-center justify-between mt-6 mb-6">
          <Slider
            defaultValue={[20]}
            value={[selectedTokens]}
            max={totalShares}
            step={1}
            onValueChange={handleSliderValueChange}
            onChange={handleSliderChange}
          />
          <p className="flex-shrink-0 px-4 py-1 bg-teal-200 bg-opacity-30 rounded-[50px] border border-teal-500 items-center justify-center text-teal-500 text-sm font-semibold">
            {selectedTokens} Tokens
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Table className="h-full">
            <TableBody className="border rounded-[5px]">
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium">Investment:</TableCell>
                <TableCell className="text-opacity-80">
                  ${investment.toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">
                  Annual Rental Income:
                </TableCell>
                <TableCell className="text-opacity-80 whitespace-nowrap">
                  $ {annualRentalIncome.toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">
                  Monthly Rental Income:
                </TableCell>
                <TableCell className="text-opacity-80 whitespace-nowrap">
                  $ {monthlyRentalIncome.toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">
                  Capital Repatument Duration:
                </TableCell>
                <TableCell className="text-opacity-80 whitespace-nowrap">
                  {repaymentDuration}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="h-full">
            <TableBody className="border rounded-[5px]">
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">
                  Monthly Rep. per Token:
                </TableCell>
                <TableCell className="text-opacity-80 whitespace-nowrap">
                  {monthlyCapitalRepaymentPerToken.toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">
                  Annual Cap Repayment
                </TableCell>
                <TableCell className="text-opacity-80 whitespace-nowrap">
                  {annualCapitalRepayment.toFixed(2)} / year
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">
                  Monthly Repayment:
                </TableCell>
                <TableCell className="text-opacity-80 whitespace-nowrap">
                  $ {monthlyRepayment.toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-[#F5F5F5]">
                <TableCell className="font-medium whitespace-nowrap">
                  Annual Repayment:
                </TableCell>
                <TableCell className="text-opacity-80 whitespace-nowrap">
                  ${annualRepayment.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Financials;

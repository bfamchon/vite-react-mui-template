import { FormStep } from '@/modules/sinister/entity/sinister.domain-model';
import { selectStep } from '@/modules/sinister/selectors/step.selector';
import { InsuranceContractSection } from '@/pages/Sinister/sections/insurance-contract/InsuranceContractSection';
import { SubmitterSection } from '@/pages/Sinister/sections/submitter/SubmitterSection';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export const Sinister = () => {
  const stepNumber = useSelector(selectStep);

  return (
    <Box sx={{ marginTop: 2 }}>
      {/* <Separator.Root className="w-[1px] h-full bg-slate-200 mx-3" decorative orientation="vertical" /> */}
      {stepNumber === FormStep.INSURANCE_CONTRACT && <InsuranceContractSection />}
      {stepNumber === FormStep.SUBMITTER && <SubmitterSection />}
    </Box>
  );
};

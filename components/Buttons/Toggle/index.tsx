import { SwitchContainer, Switch } from './styles';

type ToggleProps = {
  isOn: boolean;
  toggleSwitch: (preference: string) => void;
};

export function Toggle({ isOn, toggleSwitch }: ToggleProps) {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <SwitchContainer isOn={isOn} onClick={toggleSwitch}>
      <Switch layout transition={spring} />
    </SwitchContainer>
  );
}

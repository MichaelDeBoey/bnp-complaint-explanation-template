import { FunctionComponent } from 'react';

import { Paragraph } from './Paragraph';

export const Template: FunctionComponent = () => (
  <div className="border-t mt-8 pt-8">
    <Paragraph>Beste,</Paragraph>

    <Paragraph>
      Uit uw antwoord kan ik afleiden dat mijn vraag niet juist werd begrepen.
      <br />
      Gelieve mij toe te laten om mijn klacht te verduidelijken.
    </Paragraph>

    <Paragraph>
      Ik begrijp dat u een derde partij bent aan het contract dat ik met Cake
      heb en dat mij recht geeft op rewards en kortingen.
      <br />
      Mijn vraag om een schadevergoeding is echter niet gebaseerd op
      contractuele aansprakelijkheid.
    </Paragraph>

    <Paragraph>
      Ik stel enkel vast dat ik financiële schade lijd doordat BNP Paribas
      Fortis de PSD2-regelgeving niet afdoende implementeert.
      <br />
      Ik verwijs hiervoor in het bijzonder naar de technische reguleringsnormen
      voor sterke cliëntauthenticatie en gemeenschappelijke en veilige open
      communicatiestandaarden ontwikkeld door de Europese Bankautoriteit (EBA)
      en uitgevaardigd door de Europese Commissie in de Gedelegeerde Verordening
      2018/389 van 27 november 2017 ter aanvulling van de PSD2-richtlijn.
    </Paragraph>

    <Paragraph>
      Aangezien er een causaal verband is tussen mijn schade en de nalatigheid -
      met name de gebrekkige implementatie van de Europese wetgeving - in hoofde
      van BNP Paribas Fortis, vind ik dat BNP Paribas Fortis buitencontractueel
      aansprakelijk is voor deze schade en dit op basis van artikel 1383 van het
      Burgerlijk Wetboek.
      <br />
      Vandaar wens ik bij deze mijn vraag te herhalen om van BNP Paribas Fortis
      een schadevergoeding te ontvangen die minstens gelijk is aan het bedrag
      dat ik van Cake zou ontvangen moest de bank voldoen aan de regelgeving en
      dit zolang de bank geen werkende interface heeft.
    </Paragraph>

    <Paragraph>
      Ik verzoek u vriendelijk om mijn vraag opnieuw te behandelen in het licht
      van deze verduidelijking.
    </Paragraph>

    <Paragraph>Met vriendelijke groeten,</Paragraph>
  </div>
);

import React from 'react';

import '@root/global.css';

import * as Constants from '@common/constants';

import DefaultLayout from '@components/page/DefaultLayout';
import DefaultActionBar from '@components/page/DefaultActionBar';

import Grid from '@components/Grid';
import Row from '@components/Row';
import RowSpaceBetween from '@components/RowSpaceBetween';
import Accordion from '@components/Accordion';
import Card from '@components/Card';
import CardDouble from '@components/CardDouble';
import SidebarLayout from '@components/SidebarLayout';
import ContentFluid from '@components/ContentFluid';

import Navigation from '@components/Navigation';
import ActionBar from '@components/ActionBar';
import ActionButton from '@components/ActionButton';
import ActionListItem from '@components/ActionListItem';
import DropdownMenuTrigger from '@components/DropdownMenuTrigger';
import Button from '@components/Button';
import ButtonGroup from '@components/ButtonGroup';

import Input from '@components/Input';
import Checkbox from '@components/Checkbox';
import RadioButtonGroup from '@components/RadioButtonGroup';
import Select from '@components/Select';
import ComboBox from '@components/ComboBox';
import NumberRangeSlider from '@components/NumberRangeSlider';

import DataTable from '@components/DataTable';
import UpdatingDataTable from '@components/examples/UpdatingDataTable';
import Table from '@components/Table';
import TableRow from '@components/TableRow';
import TableColumn from '@components/TableColumn';

import AlertBanner from '@components/AlertBanner';
import BarLoader from '@components/BarLoader';
import BarProgress from '@components/BarProgress';
import BlockLoader from '@components/BlockLoader';

import HoverComponentTrigger from '@components/HoverComponentTrigger';
import Dialog from '@components/Dialog';

import Message from '@components/Message';
import MessageViewer from '@components/MessageViewer';
import MessagesInterface from '@components/examples/MessagesInterface';

import TreeView from '@components/TreeView';
import Breadcrumbs from '@components/BreadCrumbs';
import Avatar from '@components/Avatar';
import HalftoneImage from '@components/examples/HalftoneImage';
import Indent from '@components/Indent';
import Divider from '@components/Divider';

import ModalTrigger from '@components/ModalTrigger';
import ModalAlert from '@components/modals/ModalAlert';
import ModalError from '@components/modals/ModalError';
import ModalCreateAccount from '@components/modals/ModalCreateAccount';
import ModalStack from '@components/ModalStack';

import Package from '@root/package.json';

export default function PatternLanguagePage() {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <Grid>
        <Row style={{ alignItems: 'center', gap: 8 }}>
          PATTERN LANGUAGE FOR SRCL APPS{' '}
          <Button theme="SECONDARY" style={{ pointerEvents: 'none' }}>
            {Package.version}
          </Button>
        </Row>
        <Row>Self-explaining, DOS-styled compositions you can copy/paste and adapt.</Row>
      </Grid>

      <Grid>
        <AlertBanner>This page demonstrates how to compose SRCL components into a coherent, terminal-first application. Each section explains intent, shows the composition, and provides a copyable example.</AlertBanner>
      </Grid>

      <DefaultActionBar />

      <Grid>
        <Accordion defaultValue={true} title="SHELL LAYOUT — APP FRAME">
          The shell provides an app-wide frame: navigation, primary actions, and a place to render pages. Keep it consistent and minimal.
          <br />
          <br />
          <Card title="EXAMPLE">
            <Navigation
              logo="✶"
              left={
                <DropdownMenuTrigger
                  items={[
                    { icon: '⊹', children: 'New Window' },
                    { icon: '⊹', children: 'New Tab' },
                    { icon: '⊹', children: 'Open Recent' },
                  ]}
                >
                  <ActionButton>FILE</ActionButton>
                </DropdownMenuTrigger>
              }
              right={
                <>
                  <ModalTrigger modal={ModalCreateAccount}>
                    <ActionButton>SIGN IN</ActionButton>
                  </ModalTrigger>
                </>
              }
            >
              <ActionButton>HOME</ActionButton>
              <ActionButton>DOCS</ActionButton>
              <ActionButton>SETTINGS</ActionButton>
            </Navigation>

            <br />
            <ActionBar
              items={[
                { hotkey: '⌘+S', body: 'Save' },
                { hotkey: '⌘+P', body: 'Print' },
                { hotkey: '⌘+K', body: 'Command Palette' },
              ]}
            />
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="LAYOUT — GRID, ROW, CARDS">
          Structure content using a predictable monospace grid. Use Cards to group related content, and nest for hierarchy.
          <br />
          <br />
          <CardDouble title="HIERARCHY">
            <Card title="SECTION A" mode="left">
              <Card title="SUBSECTION A1" mode="right">
                This is a nested Card. Use nesting to emphasize relationships without visual noise.
              </Card>
            </Card>
            <Card title="SECTION B" mode="right">
              Use CardDouble to display two independent columns kept in rhythm.
            </Card>
          </CardDouble>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="SIDEBAR — CONTEXT + PRIMARY CONTENT">
          Sidebars are ideal for filters, help text, or navigation that supports the main view.
          <br />
          <br />
          <CardDouble title="BROWSE + FILTER">
            <SidebarLayout
              isShowingHandle
              sidebar={
                <>
                  Filters
                  <Divider />
                  <Checkbox name="active">Active</Checkbox>
                  <Checkbox name="archived">Archived</Checkbox>
                  <br />
                  Range
                  <Divider />
                  <NumberRangeSlider defaultValue={0} min={0} max={10000} step={100} />
                </>
              }
            >
              <ContentFluid>Primary content goes here. Pair contextual controls with the main surface without stealing focus.</ContentFluid>
            </SidebarLayout>
          </CardDouble>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="FORMS — INPUT + CHOICES">
          Compose inputs intentionally. Favor explicit labels and tight groupings so forms read like command prompts.
          <br />
          <br />
          <CardDouble title="ACCOUNT SETUP">
            <Input autoComplete="off" label="USERNAME" placeholder="Choose a handle" name="username" />
            <Input autoComplete="off" label="PASSWORD" placeholder="Create a strong password" type="password" name="password" />
            <Input autoComplete="off" label="CONFIRM" placeholder="Retype password" type="password" name="confirm" />
            <br />
            <RadioButtonGroup
              defaultValue="personal"
              options={[
                { value: 'personal', label: 'Personal use' },
                { value: 'work', label: 'Work project' },
                { value: 'team', label: 'Team / Organization' },
              ]}
            />
            <br />
            <Checkbox name="terms">I agree to the Terms and Data Policy.</Checkbox>
            <br />
            <Row style={{ gap: 8 }}>
              <Button>Create Account</Button>
              <Button theme="SECONDARY">Cancel</Button>
            </Row>
          </CardDouble>
          <br />
          <Card title="SELECTORS">
            <Row style={{ gap: 12, flexWrap: 'wrap' }}>
              <Select name="favorite_dinosaur" options={['T-Rex', 'Triceratops', 'Velociraptor']} defaultValue="T-Rex" placeholder="Favorite dinosaur..." />
              <ComboBox data={Constants.LANDSCAPES} label="SEARCH THE WORLD" />
              <ButtonGroup items={[{ body: '16 PX', selected: true }, { body: '32 PX' }, { body: '42 PX' }]} />
            </Row>
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="DATA — TABLES AND GRIDS">
          Choose declarative tables for hand-tuned layout, or DataTable when you want a quick grid with updates.
          <br />
          <br />
          <CardDouble title="DECLARATIVE TABLE">
            <Table>
              <TableRow>
                <TableColumn style={{ width: '16ch' }}>
                  NAME
                  <br />
                  <Divider />
                </TableColumn>
                <TableColumn>
                  DESCRIPTION
                  <br />
                  <Divider />
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>⍓ Project Atlas</TableColumn>
                <TableColumn>Composable SRCL example with a DOS aesthetic.</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>⍓ Project Echo</TableColumn>
                <TableColumn>Telemetry viewer with filters and bulk actions.</TableColumn>
              </TableRow>
            </Table>
          </CardDouble>
          <CardDouble title="DATA TABLES">
            <Card title="STATIC">
              <DataTable data={Constants.SAMPLE_TABLE_DATA_CHANGE_ME} />
            </Card>
            <Card title="UPDATING">
              <UpdatingDataTable data={Constants.SAMPLE_TABLE_DATA_CHANGE_ME} />
            </Card>
          </CardDouble>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="OVERLAYS — MENUS, TOOLTIPS, DIALOGS, MODALS">
          Start with the lightest-weight surface that communicates the idea. Only block when necessary.
          <br />
          <br />
          <Card title="MENUS + HOVERS">
            <RowSpaceBetween>
              <DropdownMenuTrigger
                items={[
                  { icon: '⊹', children: 'New File' },
                  { icon: '⊹', children: 'Upload' },
                  { icon: '⊹', children: 'Import' },
                ]}
              >
                <ActionButton>MENU</ActionButton>
              </DropdownMenuTrigger>
              <HoverComponentTrigger component="tooltip" text="Tooltips explain briefly.">
                <ActionButton>TOOLTIP</ActionButton>
              </HoverComponentTrigger>
              <HoverComponentTrigger component="popover" text="Popovers can hold denser content.">
                <ActionButton>POPOVER</ActionButton>
              </HoverComponentTrigger>
            </RowSpaceBetween>
            <br />
            <br />
            <Dialog title="CONFIRMATION">
              Use Dialog for inline confirmations when you don’t need a global modal.
              <br />
              Proceed with operation?
            </Dialog>
            <br />
            <Row style={{ gap: 8, flexWrap: 'wrap' }}>
              <ModalTrigger modal={ModalAlert} modalProps={{ message: 'Saved successfully.' }}>
                <ActionButton>ALERT MODAL</ActionButton>
              </ModalTrigger>
              <ModalTrigger modal={ModalError} modalProps={{ message: <>Non-fatal error detected. Please try again.</>, title: 'ERROR' }}>
                <ActionButton>ERROR MODAL</ActionButton>
              </ModalTrigger>
            </Row>
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="FEEDBACK — STATUS AND PROGRESS">
          Reflect system state clearly and compactly. Prefer inline cues that don’t steal focus.
          <br />
          <br />
          <Card title="LOADERS + PROGRESS">
            <Row style={{ gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <BarLoader intervalRate={100} />
              <BarLoader progress={50} />
              <BarLoader progress={100} />
              <BlockLoader mode={9} />
              <BarProgress progress={75} />
            </Row>
          </Card>
          <br />
          <Card title="BANNERS">
            <AlertBanner>Remember: the simplest surface that communicates the state is usually the right one.</AlertBanner>
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="CONTENT — BREADCRUMBS, AVATAR, MEDIA">
          Provide orientation and identity without heavy chrome. Keep information scannable.
          <br />
          <br />
          <CardDouble title="READER HEADER">
            <Breadcrumbs items={[{ name: 'Library', url: '#' }, { name: 'Guides', url: '#' }, { name: 'Pattern Language' }]} />
            <br />
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/0/0f/ChristopherAlexander2012_cropped.jpg" href="https://en.wikipedia.org/wiki/Christopher_Alexander" target="_blank">
              <Indent>
                CHRISTOPHER ALEXANDER
                <br />
                Author
              </Indent>
            </Avatar>
          </CardDouble>
          <Card title="HALFTONE IMAGE">
            <HalftoneImage src="https://upload.wikimedia.org/wikipedia/commons/0/0f/ChristopherAlexander2012_cropped.jpg" alt="Christopher Alexander" width={200} height={200} />
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="HIERARCHIES — TREE VIEW">
          Use TreeView to navigate nested content (files, categories, resources).
          <br />
          <br />
          <Card title="EXAMPLE">
            <TreeView defaultValue={true} isRoot title="Projects" style={{ minWidth: '71ch' }}>
              <TreeView defaultValue={true} title="Atlas">
                <TreeView title="README.md" isFile />
                <TreeView title="schema.sql" isFile />
              </TreeView>
              <TreeView defaultValue={true} title="Echo">
                <TreeView title="server.ts" isFile />
                <TreeView title="client.tsx" isFile />
              </TreeView>
            </TreeView>
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="MESSAGING — TERMINAL-INSPIRED CHAT">
          Show how messaging surfaces read without speech bubbles—clean rectangles, monospace rhythm.
          <br />
          <br />
          <Card title="INLINE">
            <Message>Hello from SRCL.</Message>
            <MessageViewer>Welcome—everything here keeps to the grid.</MessageViewer>
            <Message>Compose interfaces like sentences: short, precise, and readable.</Message>
          </Card>
          <Card title="FULL INTERFACE">
            <MessagesInterface />
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="PUTTING IT TOGETHER — A MINI APP VIEW">
          Combine the patterns: sidebar filters, table, actions, feedback, and routes.
          <br />
          <br />
          <CardDouble title="PROJECTS">
            <SidebarLayout
              isShowingHandle
              sidebar={
                <>
                  Actions
                  <Divider />
                  <Row style={{ gap: 8, flexWrap: 'wrap' }}>
                    <Button>New</Button>
                    <Button theme="SECONDARY">Import</Button>
                  </Row>
                  <br />
                  Filters
                  <Divider />
                  <Checkbox name="mine">Assigned to me</Checkbox>
                  <Checkbox name="open">Open</Checkbox>
                  <Checkbox name="closed">Closed</Checkbox>
                  <br />
                  Range
                  <Divider />
                  <NumberRangeSlider defaultValue={0} min={0} max={100000} step={500} />
                </>
              }
            >
              <AlertBanner>Showing 2 of 2 projects</AlertBanner>
              <br />
              <Table>
                <TableRow>
                  <TableColumn style={{ width: '20ch' }}>
                    PROJECT
                    <Divider />
                  </TableColumn>
                  <TableColumn>
                    SUMMARY
                    <Divider />
                  </TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>⍓ Atlas</TableColumn>
                  <TableColumn>Composable SRCL example with a DOS aesthetic.</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>⍓ Echo</TableColumn>
                  <TableColumn>Telemetry viewer with filters, streaming updates, and alerts.</TableColumn>
                </TableRow>
              </Table>
              <br />
              <RowSpaceBetween>
                <div style={{ flex: 1, marginRight: 12 }}>
                  <BarLoader progress={42} />
                </div>
                <DropdownMenuTrigger
                  items={[
                    { icon: '⊹', children: 'Export CSV' },
                    { icon: '⊹', children: 'Archive' },
                    { icon: '⊹', children: 'Delete' },
                  ]}
                >
                  <ActionButton>ACTIONS</ActionButton>
                </DropdownMenuTrigger>
              </RowSpaceBetween>
            </SidebarLayout>
          </CardDouble>
          <br />
        </Accordion>
      </Grid>

      <Grid>
        <Card title="NEXT STEPS">
          - Copy any section above and paste it into your own pages.
          <br />
          - Replace example data with your real data.
          <br />
          - Keep surfaces minimal; communicate state inline; align everything to the grid.
          <br />
          <br />
          <RowSpaceBetween>
            <ActionListItem icon="⭢" href="https://github.com/internet-development/www-sacred" target="_blank">
              View the SRCL source code
            </ActionListItem>
            <ActionListItem icon="⭢" href="https://internet.dev" target="_blank">
              Hire our studio to build your applications
            </ActionListItem>
            <ActionListItem icon="⭢" href="https://vercel.com/home" target="_blank">
              Try our hosting provider Vercel
            </ActionListItem>
          </RowSpaceBetween>
        </Card>
      </Grid>

      <ModalStack />
    </DefaultLayout>
  );
}

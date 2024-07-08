# Cron

## Description

Input plugin for generating events at moments defined by cron expression.

## Parameters

Usage name: `cron`

Supported modes: `live`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`expression`</td>
        <td>`<str>` (e.g. `*/5 12-23 * * *`)</td>
        <td>Yes</td>
        <td>Valid cron expression</td>
    </tr>
    <tr>
        <td>`count`</td>
        <td>`<int>`</td>
        <td>Yes</td>
        <td>Number of events to generate each interval</td>
    </tr>
</table>

## Example

```yaml
cron:
  expression: "*/5 * * * *"
  count: 1
```
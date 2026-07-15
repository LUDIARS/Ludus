---
type: "Ludus Gameplay System"
title: "バレットタイム (スローモーション)"
description: "時間の流れを遅くすることで、プレイヤーに戦術的思考の余地を与え、スペクタクル性を高める。"
tags:
  - "ludus"
  - "gameplay-system"
  - "action"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:action:bullet-time"
genre_id: "genre:action"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

時間の流れを遅くすることで、プレイヤーに戦術的思考の余地を与え、スペクタクル性を高める。

# 設計思想

『能力の拡張』として機能する。超人的な反応速度を体験させつつ実際には思考時間を与えている。多用すると緊張感が薄れるため、リソース消費 (スタミナ/ゲージ) や発動条件でバランスを取る。

# 主要機能

- 時間スケール調整 (0.1〜0.5倍程度に減速)
- 選択的スロー (プレイヤーは通常速度・敵のみ減速 等)
- トリガー条件 (回避/狙撃/必殺技で発動)
- 段階的な時間変化 (スムーズな速度遷移)

# UXへの寄与

- [戦術的余裕](../../ux/60dfb77ff35a7466.md)
- [演出効果](../../ux/2faba56f519b3349.md)
- [難易度調整](../../ux/d6a9694e2c349335.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [情報とUI](../../domains/information-and-ui.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [アニメーション表現](../../pictor/animation-presentation.md)
- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [スタミナ/リソース管理](./stamina.md) の後に実装する。

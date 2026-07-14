---
type: "Ludus Gameplay System"
title: "手がかりと知識管理"
description: "得た情報を記録し、未解決の問いと結び付けて推理を支える。"
tags:
  - "ludus"
  - "gameplay-system"
  - "adventure"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:adventure:clue-knowledge"
genre_id: "genre:adventure"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

得た情報を記録し、未解決の問いと結び付けて推理を支える。

# 設計思想

プレイヤーの記憶を試すだけにせず、推論の質を試す。

# 主要機能

- 手がかりログ
- 人物・場所・物の関連付け
- 未解決事項の提示

# UXへの寄与

- [推理の連続性](../../ux/ac211f0e2999f75c.md)
- [理解の達成感](../../ux/02953e394be20e0c.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [対象調査と使用](./object-interaction.md) の後に実装する。
